<script lang="ts">
    import { hasValidSubdomain } from '$lib/client_utils';
    import {onMount} from "svelte";
    import {menuNavLinks} from "$lib/links";

    const currentUserRole: string[] = ['admin', 'user'];

    onMount(() => {
        if (hasValidSubdomain(window.location.host)) {
            console.log('valid subdomain');
        }else {
            console.log('invalid subdomain');
        }
    });

    // Local
    let currentRailCategory: keyof typeof menuNavLinks | undefined = undefined;

    // Reactive
    $: submenu = menuNavLinks[currentRailCategory ?? '/home'];
    // Filter menu items based on user role
    $: filteredSubmenu = submenu.map((segment) => ({
        ...segment,
        list: segment.list.filter(
            ({ authorizedRoles }) => (!authorizedRoles || authorizedRoles.some((role) => currentUserRole.includes(role)))
        )
    }));

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
