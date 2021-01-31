<template>
    <div id="navigation" class="row vh-100 overflow-hidden">

        <div class="col-1 sm:d-none h-100 padding-0">
            <Sidebar/>
        </div>
        <div class="col-11 sm:col-12 h-100 padding-0 overflow-hidden overflow-scroll scrollbar-none">
            <Navbar class="h-10"/>
            <div id="view-content" class="bg-grey-lighten-5 w-100 vh-100 padding-25">
                <div class="bg-white padding-25 h-100 w-100 margin-auto">
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