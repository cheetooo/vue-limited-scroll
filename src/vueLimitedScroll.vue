<template>
        <div class="locked_box" ref="locked_box" @touchstart="touchStart($event)" @touchmove="touchMove($event)"  >
            <slot></slot>
        </div>
</template>
<script>
export default {
    name:"vue-limited-scroll",
    data(){
        return{
            support:Boolean,
            startY:Number
        }
    },
    methods: {
        touchStart(event){
            this.touchY = event.touches
                ? event.touches[0].screenY
                : event.screenY;
        },
        touchMove(event){
            var curY = event.touches
            ? event.touches[0].screenY
            : event.screenY;
            if((this.$refs.locked_box.parentElement.scrollTop == 0 && curY > this.touchY)
                ||
                ((this.$refs.locked_box.clientHeight - this.$refs.locked_box.parentElement.clientHeight ==  this.$refs.locked_box.parentElement.scrollTop) && curY < this.touchY)
                ||
                (this.$refs.locked_box.scrollHeight<this.$refs.locked_box.parentElement.clientHeight)
                ){
                event.preventDefault();
            }
        },
    },
}
</script>

<style scoped>

</style>
