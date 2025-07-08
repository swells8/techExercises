from django.test import TestCase
from .models import React

class ReactModelUnitTest(TestCase):
    def setUp(self):
        React.objects.create(employee="Gianpierre Terry", department="Technology", title="Intern")
        React.objects.create(employee="Christian", department="Technology", title="manager")
        React.objects.create(employee="Mauricio", department="Technology", title="CEO")
        React.objects.create(employee="Sydney", department="Technology", title="CTO")

    def test_gianpierre_terry(self):
        employee = React.objects.get(employee="Gianpierre Terry")
        self.assertEqual(employee.department, "Technology")
        self.assertEqual(employee.title, "Intern")

    def test_christian(self):
        employee = React.objects.get(employee="Christian")
        self.assertEqual(employee.department, "Technology")
        self.assertEqual(employee.title, "manager")

    def test_mauricio(self):
        employee = React.objects.get(employee="Mauricio")
        self.assertEqual(employee.department, "Technology")
        self.assertEqual(employee.title, "CEO")

    def test_sydney(self):
        employee = React.objects.get(employee="Sydney")
        self.assertEqual(employee.department, "Technology")
        self.assertEqual(employee.title, "CTO")

    def test_employee_count(self):
        self.assertEqual(React.objects.count(), 4)
    
    def test_delete_employee(self):
        employee = React.objects.get(employee="Christian")
        employee.delete()
        self.assertEqual(React.objects.count(), 3)
    
    def test_create_employee_missing_field(self):
        with self.assertRaises(Exception):
            React.objects.create(employee="NoDept", title="Unknown")