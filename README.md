# Profile Component

This React component represents a user profile layout. It utilizes data from a JSON file to display profile information, statistics, and articles.

## Components of the Code

### Libraries and Plugins Used

- **React**: Utilized for building the user interface and managing component states.
- **Lucide-React**: Used for displaying icons like Star, ThumbsUp, Eye, and Heart.

### Components:

#### `Profile`

- Renders a user profile layout with the following sections:
  - Cover and Profile images
  - User's name
  - Follower and following statistics
  - Biography
  - Instagram handle
  - Engagement section with icons and counts (Star, ThumbsUp, Eye, Heart)
  - Posts count
  - Articles section displaying article details and a ThumbsUp icon for liking articles.

### Functionality:

- The `handleLikeClick` function manages the liking functionality for articles, allowing users to increment likes for each article individually.

## How to Use

1. **Installation**:
   - Ensure you have Node.js installed.
   - Clone the repository and navigate to the project folder.
   - Run `npm install` to install dependencies.

2. **Running the App**:
   - Start the application with `npm start`.
   - Access the profile component via the defined route or by rendering it within your app.

## Important Notes:

- This component contains a JSON file (`profileData.json`) containing the user's profile and article data.

## Author

- Created by Mridul Yadav

![Profile Image](C:\Users\user\OneDrive\Desktop\profilescreen\src\components\Example.png)