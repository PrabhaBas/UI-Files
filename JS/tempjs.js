function cal()
{
   
    var n = Number(document.getElementById('a').value);
    
    var f=1;
    for(var i=2;i<Math.sqrt(n);i++)
    if(n%i==0)
    {
        f=0;
        break;
    }

    if(f==1)
    document.getElementById("ans").innerHTML=n+" is prime";
    else
    document.getElementById("ans").innerHTML=n+" is not prime";
}