function calculate_age()
{
    const currentyear = new Date().getFullYear();
    const birthyear = 2009;
    console.log(currentyear);
    return currentyear-birthyear;
}
document.getElementById("age").innerText = calculate_age();