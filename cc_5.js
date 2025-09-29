// Coding Challenge 05

// Step 2
const employees = [
  { name: "John Smith", hourlyRate: 29.99, hoursWorked: 8 },
  { name: "Robert Downey Jr.", hourlyRate: 99.50,         hoursWorked: 10  },
  { name: "Amuro Ray", hourlyRate: 49.99, hoursWorked: 6  },
];

// Step 3
function calculateBasePay(rate, hours) {
  let regularHours;
  if (hours > 40) {
    regularHours = 40;
  } else {
    regularHours = hours;
  }
  return rate * regularHours;
}

// Step 4
function calculateOvertimePay(rate, hours) {
  let overtimeHours;
  if (hours > 40) {
    overtimeHours = hours - 40;
  } else {
    overtimeHours = 0;
  }
  return overtimeHours * rate * 1.5;
}