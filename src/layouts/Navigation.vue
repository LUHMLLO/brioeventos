<template>
    <div id="navigation" class="d-flex flex-stretch vh-100 overflow-hidden">

        <div class="vw-10 md:vw-5 sm:d-none h-100 padding-0 depth-1-grey-lighten-3">
            <Sidebar/>
        </div>

        <div class="h-100 overflow-scroll scrollbar-none" style="width: 100% !important;">
            <Navbar class="h-10 depth-1-grey-lighten-3"/>
            <div id="view-content" class="bg-grey-lighten-5 w-100 min-vh-100 padding-25">
                <div class="bg-white round-2 padding-25 h-100 w-100 margin-auto depth-1-grey-lighten-3">
                    <h1 class="margin-bottom-25">{{$route.name}}</h1>
                    <slot/>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>