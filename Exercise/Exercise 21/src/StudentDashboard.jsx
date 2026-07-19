
import React from 'react'

const StudentDashboard = () => {

    const courses = [
    { id: 1, name: 'React Fundamentals', progress: 75, instructor: 'Sarah Wilson', nextLesson: 'Components & Props', color: 'blue' },
    { id: 2, name: 'JavaScript Advanced', progress: 45, instructor: 'Mike Johnson', nextLesson: 'Async/Await', color: 'purple' },
    { id: 3, name: 'UI/UX Design', progress: 90, instructor: 'Emily Chen', nextLesson: 'Color Theory', color: 'pink' },
  ];

    const assignments = [
    { id: 1, title: 'Build a Todo App', course: 'React Fundamentals', dueDate: '2024-03-20', status: 'pending' },
    { id: 2, title: 'API Integration', course: 'JavaScript Advanced', dueDate: '2024-03-18', status: 'completed' },
    { id: 3, title: 'Design System', course: 'UI/UX Design', dueDate: '2024-03-25', status: 'in-progress' },
  ];

    const announcements = [
    { id: 1, title: 'New Course Available', message: 'Check out our new TypeScript course!', time: '2 hours ago' },
    { id: 2, title: 'Maintenance Notice', message: 'Platform updates scheduled for tonight', time: '5 hours ago' },
  ];


    const stats = [
    { label: 'Average Grade', value: '88%', icon: '📊' },
    { label: 'Courses', value: '3', icon: '📚' },
    { label: 'Study Hours', value: '45h', icon: '⏰' },
    { label: 'Assignments', value: '12', icon: '✍️' },
  ];

  return (
    // manin container
    <div className='min-h-screen bg-gray-50 px-4 py-8'>
        {/* main design container */}
        <div className='max-w-7xl mx-auto '>
            {/* header section */}
            <div className='bg-white rounded-2xl shadow-sm rounded p-6 mb-8 '>
                {/* flex header */}
                <div className="flex items-center justify-between">
                    {/* 1 */}
                    <div>
                        <h2 className='text-2xl font-bold text-gray-800'>Welcome back, Student!</h2>
                        <p className='text-gray-500'>Here's what's happening with your course today.</p>
                    </div>
                    {/* 2 */}
                    <div className='flex items-center space-x-6'>
                        <div className='relative'>
                            <span className='bg-red-400 h-2 w-2 rounded-full ring-2 ring-white block top-0 right-0 absolute' />
                            <button className='p-2 text-gray-400 hover:text-gray-500'>
                             🔔      
                            </button>
                        </div>
                            <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold'>
                              S
                            </div>
                    </div>

                </div>

            </div>

            {/* grid */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
                { stats.map((stat , index) => (
                   <div key={index} className='bg-white shadow-sm rounded-xl p-6'>
                      <div className="flex items-center">
                          <div className='text-2xl mr-4'>{stat.icon}</div>
                                <div>
                                    <div className='text-sm text-gray-500'>{stat.label}</div>
                                    <div className='text-2xl text-gray-800 font-bold'>{stat.value}</div>
                                </div>
                            </div>
                    </div>
                 ))
                }
            </div>

            {/* main content grid */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {/* Course Progress */}
                <div className='lg:col-span-2'>
                    <div className='bg-white rounded-xl shadow-sm p-6'>
                        <h2 className='text-lg font-semibold text-gray-800 mb-4'>Course Progress</h2>
                        <div className='space-y-4'>
                            { courses.map(course => (
                                // three courses
                                <div key={course.id} className='bg-gray-50 rounded-lg p-4'>
                                    {/* 1 */}
                                    <div className='flex items-center justify-between mb-2'>
                                        <h3 className='text-gray-800 font-medium'>{course.name}</h3>
                                        <span className='text-gray-500 text-sm'>{course.progress}%</span>
                                    </div>

                                    <div className='bg-gray-200 w-full h-2.5 rounded-full'>
                                        <div className={`h-2.5 rounded-full bg-${course.color}-500`}
                                        style={{ width: `${course.progress}%`}}
                                        >   
                                        </div>
                                    </div>

                                    <div className='mt-2 flex items-center justify-between text-sm'>
                                        <span className='text-gray-500'>Next: {course.nextLesson}</span>
                                        <span className='text-gray-500'>{course.instructor}</span>
                                    </div>

                                </div>
                             ))

                            }
                        </div>
                    </div>
                </div>

                {/* sidebar contents */}
                <div className='space-y-6'>
                    {/* upcoming assigments */}
                    <div className='bg-white rounded-xl shadow-sm p-6'>
                        <h2 className='text-lg font-semibold text-gray-800 mb-4'>Upcoming Assigments</h2>
                        <div className='space-y-4'>
                            { assignments.map(assignment => (
                                <div key={assignment.id} className='flex items-center justify-between '>
                                    <div>
                                        <h3 className='text-gray-800 font-medium'>{assignment.title}</h3>
                                        <p className='text-gray-500 text-sm'>{assignment.course}</p>
                                    </div>

                                    <div className='text-right'>
                                        <span className={` px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            assignment.status === "completed" ? "bg-green-100 text-green-800" : assignment.status === "in-progress" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"
                                        }`}>
                                            
                                        {assignment.status}</span>
                                        <p className='text-sm text-gray-500 mt-1'>{assignment.dueDate}</p>
                                    </div>
                                </div>
                        
                             ))
                                
                            }
                        </div>
                        
                    </div>

                        {/* Annouchment */}
                        <div className='bh-white rounded-xl shadow-sm p-6'>
                            <h2 className='text-lg font-semibold text-gray-800 mb-4'>Announcements</h2>
                            <div className='space-y-4'>
                                    {
                                        announcements.map(announcement => (
                                            <div key={announcement.id} className='border-l-4 border-blue-500 pl-4'>
                                                <h3 className='font-medium text-gray-800'>{announcement.title}</h3>
                                                <p className='text-sm text-gray-500 mt-1'>{announcement.message}</p>
                                                <p className='text-xs text-gray-500 mt-1'>{announcement.time}</p>
                                            </div>
                                        ))
                                    }
                            </div>
                    </div>
                </div>

            </div>

        </div>

    </div>

  )
}

export default StudentDashboard