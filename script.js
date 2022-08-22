
		var url="https://api.covid19api.com/summary";
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		      
		       var json=JSON.parse(this.responseText);
		       iter(json.Countries);
		       // console.log(json.Countries[0]);
		    }
		};
		xhttp.open("GET", url, true);
		xhttp.send();


		function print(x)
		{
			console.log(x);
		}


		function getExactdate(tempdate)
		{
			let months=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
			let date=tempdate.split("-");

			let year=date[0];
			let day=date[1];
			let month=date[2];
			month=(month.toString().startsWith("0"))?month.charAt(1):month;
			let exactdate=months[month-1]+" "+day+", "+year;

			return exactdate;
		}
		function draw(country)
		{
			let tempDate=country.Date.toString().split("T")[0];
			let exactDate=getExactdate(tempDate);

			let MONTHHOLDER=document.getElementById("MONTH");
			MONTHHOLDER.innerHTML="As of "+exactDate;


			let confirmed=document.getElementById("confirmed");
			confirmed.innerHTML=country.TotalConfirmed;

			let recovered=document.getElementById("recovered");
			recovered.innerHTML=country.TotalRecovered;

			let deaths=document.getElementById("deaths");
			deaths.innerHTML=country.TotalDeaths;

			let newconfirmed=document.getElementById("newconfirmed");
			newconfirmed.innerHTML=country.NewConfirmed;

			let newrecovered=document.getElementById("newrecovered");
			newrecovered.innerHTML=country.NewRecovered;

			let newdeaths=document.getElementById("newdeaths");
			newdeaths.innerHTML=country.NewDeaths;

			console.log(country);
		}




		function iter(arr)
		{
			for(var i=0;i<arr.length;i++)
			{
				let country=arr[i];
				

				if(country.Country=="Philippines")
				{
					draw(country);
					break;
				}
			}
		}