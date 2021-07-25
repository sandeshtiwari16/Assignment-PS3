var myArray1 = [
	    {'q':'Company Name', 'a':'Econstruct Design & Build Pvt Ltd'},
	    {'q':'Type of Project', 'a':'Building Sector'},
	    {'q':'Building_Sector', 'a':'Residential'},
	    {'q':'Name', 'a':'SHAISTA AFREEN'},
	    {'q':'Address', 'a':'VANDHANA SS LAKE VIEW APTS, FLAT NO-404, 4TH FLOOR, NADAMMA LAYOUT, KODICHIKANAHALLI, BENGALURU-560068,VANDHANA SS LAKE VIEW APTS, FLAT NO-404, 4TH FLOOR, NADAMMA LAYOUT, KODICHIKANAHALLI, BENGALURU- 560068,Bangalore,Karnataka,560068,India'},
	    {'q':'Mobile Number', 'a':'+91-8618246665'},
	    {'q':'Email Address', 'a':'sandeshtiwari16@gmail.com'},
	    {'q':'Area of Plot (in sq.ft)', 'a':'1000.00'},
	    {'q':'Facing', 'a':'East'},
	    {'q':'Site Address', 'a':'VANDHANA SS LAKE VIEW APTS, FLAT NO-404, 4TH FLOOR, NADAMMA LAYOUT, KODICHIKANAHALLI, BENGALURU-560068,VANDHANA SS LAKE VIEW APTS, FLAT NO-404, 4TH FLOOR, NADAMMA LAYOUT, KODICHIKANAHALLI, BENGALURU- 560068,Bangalore,Karnataka,560068,India'},
	    {'q':'Access Road Width (In Meter)', 'a':'3.60'},
	    {'q':'Type of Residence', 'a':'PADMA RESIDENCY'},
	    {'q':'Signature of Client', 'a':' '},
	    {'q':'Admin\'s Signature', 'a':' '},
]

var myArray2 = [
	    {'a':'Ground floor/1', 'b':'Parking + Commercial Space', 'c':'3.60', 'd':'Parking space to accommodate at least 3 cars'},
	    {'a':'First floor/2', 'b':'Commercial Space', 'c':'3.60', 'd':'Commercial space to be with a provision to make temporary partitions'},
	    {'a':'Second floor/3', 'b':'Commercial Space', 'c':'3.60', 'd':'Commercial space to be with a provision to make temporary partitions'},
	    {'a':'Third floor/4', 'b':'Living with open Kitchen & Dinning, 1 bedroom with attached bathroom, 1 Master bedroom, Common bathroom', 'c':'3.60', 'd':'Vastu considerations are mandatory, pooja room should be at least 5\'x5\' in dimension'},
	    {'a':'Fourth floor/5', 'b':'Living with open Kitchen & Dinning, 1 bedroom with attached bathroom, 1 Master bedroom, Common bathroom', 'c':'3.60', 'd':'Vastu considerations are mandatory, pooja room should be at least 5\'x5\' in dimension'},
]

var myArray3 = [
	    {'q':'Services Required', 'a':'<ul><li>Architectural Designing Services</li> <li>Structural Designing Services</li> <li>MEP Designing Services</li> <li>3D View (Front Elevation)</li> <li>Site visits</li> <li>BOQ</li> <li>Construction</li></ul>'},
	    {'q':'Date of the enquiry', 'a':'01-Jul-2020'},
	    {'q':'Expected Date of Completion of the Consultancy Services', 'a':'29-Sep-2020'},
	    {'q':'Probable Start Date of Execution', 'a':'01-Oct-2020'},
]
	
buildTable1(myArray1)
buildTable2(myArray2)
buildTable3(myArray3)


function buildTable1(data){
	var table = document.getElementById('myTable1')

	for (var i = 0; i < data.length; i++){
		var row = `<tr>
						<th style="background: rgba(0, 0, 0, 0.05); width: 40%; text-align: center; vertical-align: middle">${data[i].q}</th>
						<td>${data[i].a}</td>
				  </tr>`
		table.innerHTML += row


	}
}

function buildTable2(data){
	var table = document.getElementById('myTable2')

	for (var i = 0; i < data.length; i++){
		var row = `<tr>
						<td style="vertical-align: middle;">${data[i].a}</td>
						<td style="vertical-align: middle;">${data[i].b}</td>
						<td style="vertical-align: middle;">${data[i].c}</td>
						<td style="vertical-align: middle;">${data[i].d}</td>
				  </tr>`
		table.innerHTML += row


	}
}

function buildTable3(data){
	var table = document.getElementById('myTable3')

	for (var i = 0; i < data.length; i++){
		var row = `<tr>
						<th style="background: rgba(0, 0, 0, 0.05); width: 30%; text-align: center; vertical-align: middle;">${data[i].q}</th>
						<td style="vertical-align: middle;">${data[i].a}</td>
				  </tr>`
		table.innerHTML += row


	}
}