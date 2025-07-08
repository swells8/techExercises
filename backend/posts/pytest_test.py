import pytest
from .models import React

@pytest.fixture
def employees(db):
    React.objects.create(employee="Gianpierre Terry", department="Technology", title="Intern")
    React.objects.create(employee="Christian", department="Technology", title="manager")
    React.objects.create(employee="Mauricio", department="Technology", title="CEO")
    React.objects.create(employee="Sydney", department="Technology", title="CTO")

def test_gianpierre_terry(employees):
    employee = React.objects.get(employee="Gianpierre Terry")
    assert employee.department == "Technology"
    assert employee.title == "Intern"

def test_christian(employees):
    employee = React.objects.get(employee="Christian")
    assert employee.department == "Technology"
    assert employee.title == "manager"

def test_mauricio(employees):
    employee = React.objects.get(employee="Mauricio")
    assert employee.department == "Technology"
    assert employee.title == "CEO"

def test_sydney(employees):
    employee = React.objects.get(employee="Sydney")
    assert employee.department == "Technology"
    assert employee.title == "CTO"

def test_employee_count(employees):
    assert React.objects.count() == 4

def test_delete_employee(employees):
    employee = React.objects.get(employee="Christian")
    employee.delete()
    assert React.objects.count() == 3

def test_create_employee_missing_field(db):
    with pytest.raises(Exception):
        React.objects.create(employee="NoDept", title="Unknown")