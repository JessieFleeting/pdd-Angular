// 自己直接写一个注解
export function Emoji() {
    // 注解就是返回函数的函数
    return (target: any, key: string) => {
        // 位于哪个类中，再找其中属性
        let val= target[key];
        const getter = () => {
            return val;
        }
        const setter = (value: string) => {
            val = `😂${value}😂`;
        }
        // 附加在原来的对象上
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}

// 自己再写一个注解
export function Confirmable(message: string) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // 本来要调用的函数
        const original = descriptor.value;
        // 处理
        descriptor.value = function(...args: any) {
            const allow = window.confirm(message);
            if (allow) {
                // 根据返回结果决定是否执行原来的函数
                const result = original.apply(this, args);
                return result;
            }
            return null;
        }
        return descriptor;
    }
}