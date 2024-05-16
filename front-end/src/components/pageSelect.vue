<template>
    <div>
        <div class="dropdown">
            <button>Pages</button>
            <div class="dropdown-options">
                <RouterLink to="/page/:id">
                    <a href="#">Pages</a>
                </RouterLink>
                <RouterLink to="/add">
                    <a href="#">Add Page</a>
                </RouterLink>
                <RouterLink to="/delete/:id">
                    <a href="#">Delete Page</a>
                </RouterLink>
                <RouterLink to="/edit/:id">
                    <a href="#">Edit Page</a>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>
    ul{
    color: rgb(38, 182, 38);
    }
    div.scroll {
    background-color: #fed9ff;
    width: 600px;
    height: 250px;
    margin-top: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: center;
    padding: 20px;
    }
    body{
    background: #0a0a23;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    .dropdown{
    display: inline-block;
    position: absolute;
    margin: 30px;
    margin-right: 60px;
    right: 0;
    top: 0;
    }

    button{
    border:none;
    border-radius:5px;
    padding:15px 30px;
    font-size:18px;
    cursor:pointer;
    }

    button:hover{
    background-color:#ddd;
    }
    .dropdown-options {
    display: none;
    position: absolute;
    overflow: auto;
    background-color:#fff;
    border-radius:5px;
    box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.4);
    text-align: center;
    }

    .dropdown:hover .dropdown-options {
    display: block;
    }

    .dropdown-options a {
    display: block;
    color: #000000;
    padding:15px 20px;
    //Height,Width
    }

    .dropdown-options a:hover {
    color: #0a0a23;
    background-color: #d1f0d7;
    border-radius:5px;
    }
</style>
