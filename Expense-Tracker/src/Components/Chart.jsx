import { Chart } from "react-google-charts";
function Charts({details})
{
    // Create an object to accumulate prices for each category
    let categoryPrices = {};

    // Iterate over the array and accumulate prices for each category
    details.forEach(item => {
        const { category, price } = item;
        categoryPrices[category] = (categoryPrices[category] || 0) + parseInt(price);
    });

    // Convert the object into the desired format [["Category","Price"],["food", 1254], ["insurance", 123], ["mortgage", 3224]]
    let result = Object.entries(categoryPrices).map(([category, price]) => [category, price]);

    // Add the header row ["Category", "Price"]
    result.unshift(["Category", "Price"]);

    const options = {
        title: "Expense-Tracker",
        pieHole: 0.4,
        is3D: false,
    };

    return(
        <>
            <Chart
                chartType="PieChart"
                width="100%"
                height="100px"
                data={result}
                options={options}
            />
        </>
    );
}

export default Charts;