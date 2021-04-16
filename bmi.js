$(document).ready(function (){
    $("button").on("click", calculate);
});

function calculate()
{
    let totalWeight = parseFloat($("#weight").val());

    let totalHeight = parseFloat($("#height").val());

    let say;

    let maths = (totalWeight / totalHeight / totalHeight) * 703;


    if (maths < 18.5)
    {
        say = `${maths.toFixed(2)} you are underweight`;
        $("span#bmi").text(say);
    }
    else if (maths <= 24.9)
    {
        say = `${maths.toFixed(2)} you are a normal weight`;
        $("span#bmi").text(say);
    }
    else if (maths <= 29.9)
    {
        say = `${maths.toFixed(2)} you are overweight`;
        $("span#bmi").text(say);
    }
    else if (maths > 30)
    {
        say = `${maths.toFixed(2)} you are obese`;
        $("span#bmi").text(say);
    }

}