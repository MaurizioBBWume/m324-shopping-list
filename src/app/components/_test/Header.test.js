import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';
 
describe('Header component', () => {
  // Test 1: Überprüfen, ob die Komponente ohne Fehler gerendert wird
  test('renders correctly', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
 
  // Test 2: Überprüfen, ob der Haupt-Link (Homepage) den richtigen Text hat
  test('contains link to homepage with correct text', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree.children[0].children[0].children[0]).toBe('Einkaufsliste App');
  });
 
  // Test 3: Überprüfen, ob der Link zur Erstellung einer neuen Liste vorhanden ist
  test('contains link to create a new list', () => {
    const tree = renderer.create(<Header />).toJSON();
    const links = tree.children[1].children[0].children;
    const hasCreateListLink = links.some(
      (link) => link.children && link.children[0] === 'Neue Liste erstellen'
    );
    expect(hasCreateListLink).toBe(true);
  });
});