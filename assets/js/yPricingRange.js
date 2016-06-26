window.onload = function() {
	var rangeSlider = document.getElementById("PriceRange"),
		unit = document.getElementById("PriceFinal"),
		unitAdd = document.getElementById("addValue"),
		unitRemove = document.getElementById("removeValue"),
		tpBronze = document.getElementById("PriceTotalBronze"),
		upBronze = document.getElementById("PriceUnitBronze"),
		tpSilver = document.getElementById("PriceTotalSilver"),
		upSilver = document.getElementById("PriceUnitSilver"),
		tpGold = document.getElementById("PriceTotalGold"),
		upGold = document.getElementById("PriceUnitGold");
		
	var	FinalValueNumber =  unit.value;
	updateTotalFinal(FinalValueNumber);
				
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
	});
	unitRemove.addEventListener("click", function() {
		var addValue = parseInt(unit.value) - 1;
		unit.value = addValue;
		rangeSlider.value = addValue;
		generalUpdate();
	});

	function generalUpdate() {
		var FinalValue = rangeSlider.value;
		var FinalValueNumber = unit.value;
		updateTotalFinal(FinalValueNumber);
		if(unit.value >= 100) {
			unit.value = unit.max;
		}
		if(unit.value <= 0) {
			unit.value = unit.min;
		}
	}
	function updateTotalFinal(FinalValueNumber) {
		tpBronze.innerHTML = Math.round(FinalValueNumber * upBronze.innerHTML).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		tpSilver.innerHTML = Math.round(FinalValueNumber * upSilver.innerHTML).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		tpGold.innerHTML = Math.round(FinalValueNumber * upGold.innerHTML).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
}