

export type List = Array<{ href: string; label: string; authorizedRoles: string[] }>;

export const menuNavLinks: Record<string, Array<{ title: string; list: List }>> = {
    '/home': [
        {
            title: 'Home',
            list: [
                {
                    href: '/home/dashboard',
                    label: 'Dashboard',
                    authorizedRoles: []
                },
                {
                    href: '/home/get-started',
                    label: 'Get Started',
                    authorizedRoles: []
                }
            ]
        }
    ],
};