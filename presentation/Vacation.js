import React from "react";
import Tableau from "tableau-api";
import { VictoryLabel, VictoryLine, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip} from 'victory';

class TableauTest extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {victoryData: {}, viz:{}, label:"12 month home value forecast"};
    }

    initTableau() {
        const vizUrl =
            "https://public.tableau.com/views/VacationHome/VacationHome?:embed=y&:display_count=yes";

        const options = {
            hideTabs: true,
            width: "700px",
            height: "800px",
            onFirstInteractive: () => {
                const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Table");
                const options = {
                    ignoreAliases: false,
                    ignoreSelection: false,
                    includeAllColumns: false
                };
                sheet.getUnderlyingDataAsync(options).then((t) => {
                    const tableauData = t.getData();
                    let data = [];
                    const pointCount = tableauData.length; 
                    for(let a = 0; a < pointCount; a++ ) {
                        data = data.concat({
                            x: tableauData[a][0].value,
                            y: Math.round(tableauData[a][3].value,2)
                        })
                    };
                    this.setState({
                        victoryData: data
                    });
                })
            }
        };

        let viz = new tableau.Viz(this.container, vizUrl, options);
        this.setState({
            viz:viz
        })
    }

    getMoreData(){
        const sheet = this.state.viz.getWorkbook().getActiveSheet().getWorksheets().get("Table");
        const options = {
            ignoreAliases: false,
            ignoreSelection: false,
            includeAllColumns: false
        };
        sheet.getUnderlyingDataAsync(options).then((t) => {
            const moreData = t.getData();
            let newData = [];
            const pointCount = moreData.length;
            for(let a = 0; a < pointCount; a++ ) {
                newData = newData.concat({
                    x: moreData[a][0].value,
                    y: Math.round(moreData[a][4].value,2)
                })
            };
            this.setState({
                victoryData: newData,
                label: "Price-to-Rent Ratio"
            });
        })
    }

    render() {
        return ( 
            <div>
                <div ref = {c => (this.container = c)} style = {{position: "absolute", left: -200,top: -375}}/>
                <div style = {{position: "absolute", right: -300, top: -375, height: 800, width: 800}}>
                    <button onClick={this.getMoreData.bind(this)} style={{fontSize:"12px"}}>Click to get More Data!</button>
                    <VictoryChart domainPadding={20} theme={VictoryTheme.material} responsive={false} width={800} height={800}>
                        <VictoryLabel text="getData from Tableau" x={30} y={30} 
                        style={{textAnchor: "start",
                        verticalAnchor: "end",
                        fill: "#000000",
                        fontFamily: "inherit",
                        fontSize: "18px",
                        fontWeight: "bold"}}/>
                        <VictoryAxis fixLabelOverlap={true} tickValues={[""]}/>
                        <VictoryAxis dependentAxis={true} label={this.state.label} style={{axisLabel:{fontSize:20, padding:30 }}}/>
                        <VictoryLine data={this.state.victoryData} animate={{duration: 1000}}/>
                    </VictoryChart>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.initTableau();
    }
}

export default TableauTest;