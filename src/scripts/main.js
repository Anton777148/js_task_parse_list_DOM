'use strict';

const listSalary = [...document.querySelectorAll('li')];

function parseSalary(salaryStr) {
  return parseInt(salaryStr.replace(/[$,]/g, ''), 10);
}

function sortList(list) {
  return list.sort((a, b) => {
    const salaryA = parseSalary(a.getAttribute('data-salary'));
    const salaryB = parseSalary(b.getAttribute('data-salary'));

    return salaryB - salaryA;
  });
}

function getEmployees(list) {
  return list.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.getAttribute('data-position'),
      salary: parseSalary(item.getAttribute('data-salary')),
      age: parseInt(item.getAttribute('data-age'), 10),
    };
  });
}

const sortedItems = sortList(listSalary);

const ul = document.querySelector('ul');

ul.innerHTML = '';

sortedItems.forEach((item) => ul.appendChild(item));

getEmployees(listSalary);
