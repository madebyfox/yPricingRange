window.onload = function() {
	var rangeSlider = document.getElementById("PriceRange"),
		unit = document.getElementById("PriceFinal"),
		tpBronze = document.getElementById("PriceTotalBronze"),
		upBronze = document.getElementById("PriceUnitBronze"),
		tpSilver = document.getElementById("PriceTotalSilver"),
		upSilver = document.getElementById("PriceUnitSilver"),
		tpGold = document.getElementById("PriceTotalGold"),
		upGold = document.getElementById("PriceUnitGold");
		
	var	FinalValueNumber =  unit.value;
	updateTotal(FinalValueNumber);
				
	unit.addEventListener("input", function() {
		rangeSlider.value = unit.value;
		var FinalValue = rangeSlider.value;
		var FinalValueNumber = unit.value;
		updateTotal(FinalValueNumber );
	}, false);

	rangeSlider.addEventListener("input", function() {
		unit.value = rangeSlider.value;
		var FinalValue = rangeSlider.value;
		var FinalValueNumber = unit.value;
		updateTotal(FinalValueNumber);
	}, false);

	function updateTotal(FinalValueNumber) {
		updateTotalFinal(FinalValueNumber)
	}
	function updateTotalFinal(FinalValueNumber) {
		tpBronze.innerHTML = Math.round(FinalValueNumber * upBronze.innerHTML).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		tpSilver.innerHTML = Math.round(FinalValueNumber * upSilver.innerHTML).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		tpGold.innerHTML = Math.round(FinalValueNumber * upGold.innerHTML).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
}