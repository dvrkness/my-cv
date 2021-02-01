export const CVData = {
    personalData: {
        name: 'Manh Hung Nguyen',
        title: 'Full-Stack Developer',
        contacts: [
            { type: 'email', value: 'nmanhung99@gmail.com' },
            { type: 'phone', value: '+84 395907089' },
            { type: 'github', value: 'github.com/dvrkness' },
        ],
    },
    sections: [
        {
            type: 'common-list',
            title: 'Education',
            icon: 'graduation',
            items: [
                {
                    title: 'University of Engineering and Technology (BS)',
                    description: 'Major in Information Technology',
                    rightSide: '07/2017 – Present',
                },
            ],
        },
        {
            type: 'experiences-list',
            title: 'Experiences',
            icon: 'archive',
            items: [
                {
                    title: 'Software Developer',
                    company: 'MISA',
                    companyWebSite: 'https://www.misa.vn/cong-ty',
                    companyMeta: 'Product company',
                    description:
                        "I'm using .NET, jQuery, Bootstrap and working as a Full-Stack developer",
                    datesBetween: '2019.7 - 2020.10',
                },
                {
                    title: 'Software Developer',
                    company:
                        'Software Engineering Laboratory (at University of Engineering and Technology)',
                    companyWebSite: 'http://fit.uet.vnu.edu.vn/',
                    datesBetween: '2020.11 - Present',
                    description: "I'm working as a Full-Stack developer",
                },
            ],
        },
        {
            type: 'projects-list',
            title: 'Projects',
            icon: 'tasks',
            groups: [
                {
                    sectionHeader: 'MISA',
                    description: 'ㅤProduct Company',
                    items: [
                        {
                            title: 'ShortLink',
                            projectUrl: 'https://mily.vn/app/',
                            description:
                                "A Shorten link app using .NET MVC, Bootstrap and jQuery. The purpose is to integrate into MISA's products.",
                        },
                        {
                            title: 'BUMAS',
                            projectUrl: 'https://bumas.misa.vn/tinh-nang/',
                            description:
                                'A budget estimation management app includes fully professional budgeting and management. App using .NET MVC, Bootstrap, jQuery, ApexCharts, v.v for UI and .NET, MySQL, MongoDB, AWS for server.',
                        },
                    ],
                },
                {
                    sectionHeader: 'Software Engineering Laboratory',
                    description:
                        'ㅤAt University of Engineering and Technology',
                    items: [
                        {
                            title: 'Surveillance',
                            projectUrl:
                                'https://gitlab.com/nqminh/geophysics-apps/-/tree/dev/surveillance',
                            description:
                                'It is a weather monitoring web app. It includes a cron job to get raw data on FTP server, web API using .NET and UI app using React.',
                        },
                        {
                            title: 'Earthquake Network',
                            projectUrl:
                                'https://gitlab.com/nqminh/geophysics-apps/-/tree/dev/earthquake_network',
                            description:
                                'A earthquake warning mobile app using Flutter for UI and .NET, PostgreSQL for building API.',
                        },
                    ],
                },
                {
                    sectionHeader: '‍Personal Projects',
                    description: 'ㅤ💁ㅤ💻ㅤ❤️',
                    items: [
                        {
                            title: 'EZSun',
                            projectUrl: 'https://github.com/dvrkness/EZSun',
                            description:
                                'A mobile app makes finding coupons easier for the biggest E-Commerce of Vietnam. App using UI Kitten (React Native UI Library) and Firebase for building API.',
                        },
                    ],
                },
            ],
        },
        {
            type: 'common-list',
            title: 'Technical Skills',
            icon: 'rocket',
            items: [
                {
                    title: 'Programming',
                    description:
                        'C#, JavaScript, Typescript, Python, C++, Java',
                },
                {
                    title: 'Frameworks & libraries',
                    description:
                        '.NET, React, React Native, Redux, Vue.js, jQuery, Bootstrap, Firebase, FastAPI',
                },
                {
                    title: 'Database',
                    description: 'SQL Server, PosgreSQL, MySQL, MongoDB',
                },
                {
                    title: 'Developer Tools',
                    description:
                        'Git, Docker, Azure, VSCode, Visual Studio, Terminal',
                },
                {
                    title: 'Languages',
                    description: 'Vietnamese (native), English (intermediate)',
                },
            ],
        },
        {
            type: 'tag-list',
            title: 'Hobbies & Interests',
            icon: 'cubes',
            items: [
                'Movie 🎬',
                'Music 🎵',
                'Youtube ▶',
                'Rubik 🎲',
                'Adopt Fish 🐳',
                'Eating 🍖',
            ],
        },
    ],
    branding: false,
};
