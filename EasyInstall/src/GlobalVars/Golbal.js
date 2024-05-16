export function updateCheckedStatus(appName, checked) {
  const item = appList.find((app) => app.name == appName);
  if (item !== null || item !== undefined) item.checked = checked;
}

let appList = [];

async function fetchAppList()
{
    try{
        const response = await fetch("http://localhost:4000/getApps");
        const data = await response.json();
        appList = data;
        return appList;
    } catch (error) {
        console.error('Error fetching appList:', error);
    }
}

await fetchAppList();

export {appList};
