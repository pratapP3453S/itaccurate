

export const fetchComponentData = async (DynamicRoute) => {
    const response  = await fetch("/data.json");
    const data = await response.json();
    console.log(data.courseDetails[DynamicRoute])
    return data.courseDetails[DynamicRoute];
}