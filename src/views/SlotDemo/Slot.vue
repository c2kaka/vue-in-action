<template>
    <div>
        <slot></slot>
        <slot name="title"></slot>
        <slot name='item' v-bind="{value: 'vue'}"></slot>
    </div>
</template>

<script>
export default {
    name: 'SlotDemo'
}
</script>