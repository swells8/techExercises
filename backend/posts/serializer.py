
from .models import React
from typing import Iterable, List, Dict, Any


def serialize_employees(employees: Iterable[React]) -> List[Dict[str, Any]]:
    data = []
    for employee in employees:
        data.append({
            'employee': employee.employee,
            'department': employee.department,
            'title': employee.title
        })
    return data

