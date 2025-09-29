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

// Step 5
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

// Step 6
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const taxes = calculateTaxes(grossPay);
  const netPay = grossPay - taxes;

  return {
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}

// Step 7
for (const emp of employees) {
  console.log(processPayroll(emp));
}