<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    
        name: 'Scroller',
        data(){
            return{

            }
        },
        props:{
            handleToScroll:{
                type:Function,
                default:function(){}
            },
            handleToTouchEnd:{
                type:Function,
                default:function(){}
            }
        },
    mounted(){
					var scroll=new BScroll(this.$refs.wrapper,{
						tap:true,
						probeType:1
                    });
                    
					scroll.on('scroll',(pos)=>{
						// console.log('scroll');
							this.handleToScroll(pos)
						
                    })
                    this.scroll=scroll;
					scroll.on('touchEnd',(pos)=>{
						// console.log('scroll');
							this.handleToTouchEnd(pos)
						
                    })
                    
    },
    methods:{
        scrolltop(y){
            this.scroll.scrollTo(0,y)
        }
    }
}
</script>
<style scoped>
    .wrapper{
        height: 100%;
    }
</style>