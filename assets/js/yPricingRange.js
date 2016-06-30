window.onload = function() {
	var rangeSlider = document.getElementById("PriceRange"),
		unit = document.getElementById("PriceFinal"),
		unitValue =  document.getElementById("PriceFinal").value,
		unitAdd = document.getElementById("addValue"),
		unitRemove = document.getElementById("removeValue"),
		tpBronze = document.getElementById("PriceTotalBronze"),
		upBronze = document.getElementById("PriceUnitBronze"),
		tpSilver = document.getElementById("PriceTotalSilver"),
		upSilver = document.getElementById("PriceUnitSilver"),
		tpGold = document.getElementById("PriceTotalGold"),
		upGold = document.getElementById("PriceUnitGold");

	updateTotalFinal(unitValue);
				
	unit.addEventListener("input", function() {
		rangeSlider.value = unit.value;
		generalUpdate();
	}, false);

	rangeSlider.addEventListener("input", function() {
		unit.value = rangeSlider.value;
		generalUpdate();
	}, false);

	unitAdd.addEventListener("click", function() {
		var addValue = parseInt(unit.value) + 1;
		unit.value = addValue;
		rangeSlider.value = addValue;
		generalUpdate();
	}, false);
	unitRemove.addEventListener("click", function() {
		var removeValue = parseInt(unit.value) - 1;
		unit.value = removeValue;
		rangeSlider.value = removeValue;
		generalUpdate();
	}, false);

	function generalUpdate() {
		var FinalValue = rangeSlider.value,
			unitValue = unit.value;
		
		if(unit.value >= parseInt(unit.max)) {
			unit.value = unit.max;
			unitValue = unit.max;
			updateTotalFinal(unitValue);
		}
		if(unit.value <= parseInt(unit.min)) {
			unit.value = unit.min;
			unitValue = unit.min;
			updateTotalFinal(unitValue);
		} else {
			updateTotalFinal(unitValue);			
		}

		// updateTotalFinal(unitValue);
	}
	function updateTotalFinal(unitValue) {
		tpBronze.innerHTML = Math.round(unitValue * upBronze.innerHTML).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		tpSilver.innerHTML = Math.round(unitValue * upSilver.innerHTML).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		tpGold.innerHTML = Math.round(unitValue * upGold.innerHTML).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
}