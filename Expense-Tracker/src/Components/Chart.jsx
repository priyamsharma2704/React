import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { useExpensesListStore } from "../Store/store";
import { useEffect } from "react";
import { useState } from "react";

export default function Chart() {
    const [chartData, setChartData] = useState([]);

    const { expenseList } = useExpensesListStore();

    useEffect(() => {
        let dataArr = [];
        for (let expense in expenseList) {
            let chartDetail = {
                id: parseInt(expense),
                value: parseInt(expenseList[expense].price),
                label: expenseList[expense].category,
            };
            dataArr.push(chartDetail);
        }
        setChartData(dataArr);
    }, [expenseList]);

    return (
        <PieChart
            series={[
                {
                    data: chartData,
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -45,
                    endAngle: 225,
                    cx: 150,
                    cy: 150,
                },
            ]}
            width={400}
            height={400}
        />
    );
}
