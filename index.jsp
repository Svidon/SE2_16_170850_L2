<!DOCTYPE html>
<html>
	<head>
		<title>Warehouse Managing</title>
	</head>

	<body>

		<h1>Warehouse</h1>

		<br>
		Maximum is: <p id="maximum">30</p>
		<br>

		 <table id="table">
		  <caption>Stored Items</caption>
		  <tr>
		    <th>Item</th>
		    <th>Quantity</th>
		  </tr>
		</table>

		<br>

		<button onclick="showInsert()">Order item</button>
		<div id="insert" style="display:none">
			<form>
			    <p>Item name: <input type='text' id='name' name='name'/></p>
			    <p>Quantity: <input type='number' id='qty' name='qty'/></p> 
			    <button onclick="newItem()">Insert</button>
			</form>
		</div>

		<br>

		<button onclick="showNewMax()">Change Maximum</button>
		<div id="changemax" style="display:none">
			<form>
			    <p>New Maximum: <input type='number' id='max' name='max'/></p> 
			    <button onclick="newMax()">Change</button>
			</form>
		</div>
	</body>
</html>

<script src="script.js"></script>