const selectAll = document.getElementById('select-all');
const checkboxes = [];
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

for (const checkbox of allCheckboxes) {
  if (checkbox.id !== 'select-all') {
    checkboxes.push(checkbox);
  }
}

for (const checkbox of checkboxes) {
  checkbox.onclick = (ele) => {
    if (checkboxes.every((item) => item.checked)) {
      selectAll.checked = ele.target.checked;
    } else {
      selectAll.checked = false;
    }
  };
}

selectAll.onclick = () => {
  for (const checkbox of checkboxes) {
    checkbox.checked = selectAll.checked;
  }
};
