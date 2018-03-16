export default class JobsService {
  static getJobs() {
    return JSON.parse(jobsData);
  }
  static getFilters() {
    return JSON.parse(filterData);
  }
}

const jobsData = `{
 "posts": [
   {
     "name": "SEO Review and Reccomendations",
     "options": {
        "fixed": "Regular",
        "budget": 300,
        "delivery": "Urgent",
        "posted": "12 minutes ago",
        "ends": "14d, 23h",
        "proposals": 0
      },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
    "category": "Search Engine",
    "skills": [
      {
        "id":1,
        "name": "net-framework"
      },
      {
        "id":2,
        "name": "рhp"
      }
    ],
    "client": {
       "country": "United states",
       "rating": 4.8
    }
   },
   {
     "name": "SEO Review and Reccomendations",
     "options": {
        "fixed": "Regular",
        "budget": 300,
        "delivery": "Urgent",
        "posted": "12 minutes ago",
        "ends": "14d, 23h",
        "proposals": 0
      },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
    "category": "Search Engine",
    "skills": [
      {
        "id":1,
        "name": "net-framework"
      },
      {
        "id":2,
        "name": "рhp"
      }
    ],
    "client": {
       "country": "United states",
       "rating": 4.8
    }
   },
   {
     "name": "SEO Review and Reccomendations",
     "options": {
        "fixed": "Regular",
        "budget": 300,
        "delivery": "Urgent",
        "posted": "12 minutes ago",
        "ends": "14d, 23h",
        "proposals": 0
      },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
    "category": "Search Engine",
    "skills": [
      {
        "id":1,
        "name": "net-framework"
      },
      {
        "id":2,
        "name": "рhp"
      }
    ],
    "client": {
       "country": "United states",
       "rating": 4.8
    }
   },
   {
     "name": "SEO Review and Reccomendations",
     "options": {
        "fixed": "Regular",
        "budget": 300,
        "delivery": "Urgent",
        "posted": "12 minutes ago",
        "ends": "14d, 23h",
        "proposals": 0
      },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
    "category": "Search Engine",
    "skills": [
      {
        "id":1,
        "name": "net-framework"
      },
      {
        "id":2,
        "name": "рhp"
      }
    ],
    "client": {
       "country": "United states",
       "rating": 4.8
    }
   },
   {
     "name": "SEO Review and Reccomendations",
     "options": {
        "fixed": "Regular",
        "budget": 300,
        "delivery": "Urgent",
        "posted": "12 minutes ago",
        "ends": "14d, 23h",
        "proposals": 0
      },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
    "category": "Search Engine",
    "skills": [
      {
        "id":1,
        "name": "net-framework"
      },
      {
        "id":2,
        "name": "рhp"
      }
    ],
    "client": {
       "country": "United states",
       "rating": 4.8
    }
   },
   {
     "name": "SEO Review and Reccomendations",
     "options": {
        "fixed": "Regular",
        "budget": 300,
        "delivery": "Urgent",
        "posted": "12 minutes ago",
        "ends": "14d, 23h",
        "proposals": 0
      },
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur... more Excepteur sint occaecat cupidatat no",
    "category": "Search Engine",
    "skills": [
      {
        "id":1,
        "name": "net-framework"
      },
      {
        "id":2,
        "name": "рhp"
      }
    ],
    "client": {
       "country": "United states",
       "rating": 4.8
    }
   }
 ]
}`;
const filterData = `
  {
    "category": [
      {
        "id": 0,
        "name": "Best match"
      }
    ],
    "subcategory": [
      {
        "id": 0,
        "name": "All Subcategories"
      },
      {
        "id": 1,
        "name": "Data entry (1 306)"
      },
      {
        "id": 2,
        "name": "Personal Assistant (1 907)"
      },
      {
        "id": 3,
        "name": "Web Research (972)"
      },
      {
        "id": 4,
        "name": "Email Response Handling (80)",
        "checked": true
      },
      {
        "id": 5,
        "name": "Transcription (307)",
        "checked": true
      },
      {
        "id": 6,
        "name": "Other - Administrative support",
        "checked": true
      }
    ],
    "raiting": [
      {
        "id": 0,
        "name": "Any stars"
      },
      {
        "id": 1,
        "name": "5 stars (930)"
      },
      {
        "id": 2,
        "name": "4.5 stars and Up (2 591)"
      },
      {
        "id": 3,
        "name": "4 stars and Up (1 546)"
      },
      {
        "id": 4,
        "checkbox": true,
        "name": "Include unreated freelancers (1 784)"
      }
    ],
    "budget": [
      {
        "id": 0,
        "name": "Any budget"
      }
    ],
    "delivery": [
      {
        "id": 0,
        "name": "Any..."
      }
    ],
    "location": [
      {
        "id": 0,
        "name": "Any location"
      }
    ]
  }
`;
