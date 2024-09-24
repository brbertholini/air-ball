import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',  // To arrange items in a row
    justifyContent: 'space-between',  // To place the items at the two ends (left and right)
    alignItems: 'center',  // To center items vertically
    paddingHorizontal: 16,  // Add padding to the sides
    backgroundColor: '#333',  // You can choose the background color if needed
    paddingVertical: 10,  // Padding top and bottom
  },
  leftContainer: {
    flexDirection: 'row',  // Arrange icon and text in a row
    alignItems: 'center',
  },
  text: {
    color: '#E0E0E0',  // Text color
    fontFamily: 'Poppins-Regular',  // Font family
    fontSize: 14,  // Font size
    marginLeft: 8,  // Spacing between icon and text
  },
  rightContainer: {
    // Styling for right container (notifications icon)
  },
});
