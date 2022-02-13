let temp = 29;
let wind = 4.0;

if (temp <= 50 && wind > 3.0) {
  const windchill =
    35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16;
    document.getElementById("windchill").textContent = parseFloat(windchill).toPrecision(2);
} else {
  const windchill = "N/A";
  document.getElementById("windchill").textContent = windchill;
}
document.getElementById("temp").textContent = temp;
document.getElementById("wind").textContent = wind;
