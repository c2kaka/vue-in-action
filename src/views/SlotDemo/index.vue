<template>
    <div>
        <a-tabs>
            <a-tab-pane key="slot" tab='插槽'>
                <h2>2.6新语法</h2>
                <SlotDemo>
                    <p>default slot</p>
                    <template v-slot:title>
                        <p>title slot1</p>
                        <p>title slot2</p>
                    </template>
                    <template v-slot:item='props'>
                        <p>item scope-slot {{props.value}}</p>
                    </template>
                </SlotDemo>
                <br>
                <h2>旧语法</h2>
                 <SlotDemo>
                    <p>default slot</p>
                    <p slot="title">title slot1</p>
                    <p slot="title">title slot2</p>
                    <p slot="item" slot-scope="props">item scope-slot {{props.value}}</p>
                </SlotDemo>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
import Slot from './Slot'
export default {
    components:{
        SlotDemo: Slot
    }
}
</script>