import axios from 'axios';
import { AsyncStorage } from 'react-native';


/* App */
export const SET_OVERLAY = 'SET_OVERLAY',
             GET_CONTENT = 'GET_CONTENT',
             SET_CONTENT = 'SET_CONTENT',
             SET_CURRENT_VIEW = 'SET_CURRENT_VIEW',
             SYNC_DATA = 'SYNC_DATA';

/* User */
export const USER_GET = 'USER_GET',
             USER_LOGIN = 'USER_LOGIN',
             USER_LOGOUT = 'USER_LOGOUT',
             USER_REGISTER = 'USER_REGISTER';

let habits = [
    {
        id: 'habit1',
        title: 'This is my first habit I want to track',
        description: 'I am going to run every day.',
        startDate: new Date().toString(),
        endDate: new Date().toString(),
        reminderOptions: {
            setReminders: false,
            reminders: [
                {
                    title: '',
                    startDate: '',
                    dueDate: '',
                    completionDate: '',
                    location: '',
                    notes: '',
                    alarms: [
                        {
                            structuredLocation: {
                                title: 'title',
                                proximity: 'enter',
                                radius: 500,
                                coords: {
                                    latitude: 30.0000,
                                    longitude: 97.0000
                                }
                            }
                        }
                    ],
                    recurrence: 'weekly',
                    recurrenceInterval: 2,
                    isCompleted: false
                }
            ]
        }
    },
    {
        id: 'habit2',
        title: 'Second',
        description: 'I am going to ride my bike three times per week.',
        startDate: new Date().toString(),
        endDate: new Date().toString(),
        reminderOptions: {
            setReminders: false,
            reminders: [
                {
                    title: '',
                    startDate: '',
                    dueDate: '',
                    completionDate: '',
                    location: '',
                    notes: '',
                    alarms: [
                        {
                            structuredLocation: {
                                title: 'title',
                                proximity: 'enter',
                                radius: 500,
                                coords: {
                                    latitude: 30.0000,
                                    longitude: 97.0000
                                }
                            }
                        }
                    ],
                    recurrence: 'weekly',
                    recurrenceInterval: 2,
                    isCompleted: false
                }
            ]
        }
    },
    {
        id: 'habit3',
        title: 'Third',
        description: 'I will not pick my nose.',
        startDate: new Date().toString(),
        endDate: new Date().toString(),
        reminderOptions: {
            setReminders: false,
            reminders: [
                {
                    title: '',
                    startDate: '',
                    dueDate: '',
                    completionDate: '',
                    location: '',
                    notes: '',
                    alarms: [
                        {
                            structuredLocation: {
                                title: 'title',
                                proximity: 'enter',
                                radius: 500,
                                coords: {
                                    latitude: 30.0000,
                                    longitude: 97.0000
                                }
                            }
                        }
                    ],
                    recurrence: 'weekly',
                    recurrenceInterval: 2,
                    isCompleted: false
                }
            ]
        }
    },
];

let personalGoals = [
    {
        title: 'Here is the first personal goal',
        description: 'This will watch habits 1 and 2'
    },
    {
        title: 'Second goal',
        description: 'this will watch habit 3'
    }
];

let groupGoals = [
    {
        title: 'This is my first group goal',
        description: 'My second personal goal will be associated to this one.'
    }
];

/*AsyncStorage.setItem('habitTracker', JSON.stringify({
    user: {
        id: 'user' + new Date().getTime(),
        name: {
            first: 'Paul',
            last: 'Brimley'
        },
        email: 'paul.k.brimley@gmail.com',
        password: 'asdf',
        group: '',
        groupGoalsPendingInvitation: [
            {
                id: '',
                title: '',
                groupName: ''
            }
        ]
    },
    habits: [
        {
            id: 'habit1',
            user :'',
            title: 'This is my first habit I want to track',
            description: 'I am going to run every day.',
            startDate: new Date().toString(),
            endDate: new Date().toString(),
            reminderOptions: {
                setReminders: false,
                reminders: [
                    {
                        title: '',
                        startDate: '',
                        dueDate: '',
                        completionDate: '',
                        location: '',
                        notes: '',
                        alarms: [
                            {
                                structuredLocation: {
                                    title: 'title',
                                    proximity: 'enter',
                                    radius: 500,
                                    coords: {
                                        latitude: 30.0000,
                                        longitude: 97.0000
                                    }
                                }
                            }
                        ],
                        recurrence: 'weekly',
                        recurrenceInterval: 2,
                        isCompleted: false
                    }
                ]
            }
        },
        {
            id: 'habit2',
            user :'',
            title: 'Second',
            description: 'I am going to ride my bike three times per week.',
            startDate: new Date().toString(),
            endDate: new Date().toString(),
            reminderOptions: {
                setReminders: false,
                reminders: [
                    {
                        title: '',
                        startDate: '',
                        dueDate: '',
                        completionDate: '',
                        location: '',
                        notes: '',
                        alarms: [
                            {
                                structuredLocation: {
                                    title: 'title',
                                    proximity: 'enter',
                                    radius: 500,
                                    coords: {
                                        latitude: 30.0000,
                                        longitude: 97.0000
                                    }
                                }
                            }
                        ],
                        recurrence: 'weekly',
                        recurrenceInterval: 2,
                        isCompleted: false
                    }
                ]
            }
        },
        {
            id: 'habit3',
            user :'',
            title: 'Third',
            description: 'I will not pick my nose.',
            startDate: new Date().toString(),
            endDate: new Date().toString(),
            reminderOptions: {
                setReminders: false,
                reminders: [
                    {
                        title: '',
                        startDate: '',
                        dueDate: '',
                        completionDate: '',
                        location: '',
                        notes: '',
                        alarms: [
                            {
                                structuredLocation: {
                                    title: 'title',
                                    proximity: 'enter',
                                    radius: 500,
                                    coords: {
                                        latitude: 30.0000,
                                        longitude: 97.0000
                                    }
                                }
                            }
                        ],
                        recurrence: 'weekly',
                        recurrenceInterval: 2,
                        isCompleted: false
                    }
                ]
            }
        }
    ],
    personalGoals: [
        {
            id: 'personalGoal1',
            user :'',
            title: 'Here is the first personal goal',
            description: 'This will watch habits 1 and 2',
            habits: ['habit1', 'habit2'],
            startDate: new Date().toString(),
            endDate: new Date().toString()
        },
        {
            id:'personalGoal2',
            user :'',
            title: 'Here is the second personal goal',
            description: 'This will watch habit 3',
            habits: ['habit3'],
            startDate: new Date().toString(),
            endDate: new Date().toString()
        },
    ],
    groupGoals: [
        {
            id: 'groupGoal1',
            title: 'This is my first group goal',
            description: 'My second personal goal will be associated to this one.',
            personalGoals: [],
            startDate: new Date().toString(),
            endDate: new Date().toString(),
            groupName: '',
            team: [
                {
                    id: '',
                    name: ''
                }
            ]
        }
    ],
    messages: [
        {
            id: '',
            user: '',
            title: '',
            message: '',
            from: '',
            goal: '',
            timeStamp: ''
        }
    ]
})).then(() => {
    console.log('there here');
});*/



export function getContent(url) {
    let contentToSend = AsyncStorage.getItem('habitTracker').then((content) => {
        return JSON.parse(content);
    });

    return {
        type: GET_CONTENT,
        payload: contentToSend
    }
}

export function setContent() {
    return {
        type: SET_CONTENT,
        payload: []
    }
}

export function setCurrentView(view) {
    return {
        type: SET_CURRENT_VIEW,
        payload: view
    }
}

export function syncData() {
   /* AsyncStorage.getItem('habits').then((value) => {
        console.log('got the stuff', JSON.parse(value));
        let data = axios.get();
        return {
            type: SYNC_DATA,
            payload:
        }
    });*/

   return {
       type: SYNC_DATA,
       payload: {data: true}
   }
}