# iDiary Back-end
 I created this project to showcase my skills creating a backend API using Node, Mongoose and MongoDB, and Express while using React to create the front-end visuals. .


# Technology Used
- Built with MongoDB Node.js Express and Mongoose
- logo created with Canva
- Front end created in React
- [my idiary front end repo](https://github.com/AshleyOliver218/idiary-frontend.git)


# Code Example
`// Create Route
router.post('/', (req, res)=>{
    Journals.create(req.body, (err, createdJournal)=>{
        res.json(createdJournal) //response to front end New route (creates new journal)
    })
})`
  
This is the most important bit of code in the back end. Without creating an instance of data within the database there would be no information to display.

# Front-end Frameworks used
For this project I used React check out [my idiary frontend repo](https://github.com/AshleyOliver218/idiary-frontend.git). React utilizes Html CSS and JSX to create a single page site using components as the building block for pages.

# How to use?
Simply click [here](https://idiary-mongoose.onrender.com/) to visit the backend deployment on render.
If you wanted to use the project as a starting point for your own project you would have to fork and git clone [my idiary backend repo](https://github.com/AshleyOliver218/idiary-backend.git) Then in the terminal you would initialize with npm init -y and then npm i to download all of the dependencies in my package.json
You would also need to click [here](https://github.com/AshleyOliver218/idiary-frontend.git) and follow the instructions in the repo's README to set up the frontend.

# Up-Coming Features
- Responsive design optimized for mobile use
- Implement user authentication and authorization
- Allow a parent limited authorization to see certain portion of the diary entries
- Parent would assign the goals to child and see if they are completed by the end of the day
- Diary entries can be searched by title

# Credits
Kasper and Dylan for all your help

 [Canva](https://www.canva.com)