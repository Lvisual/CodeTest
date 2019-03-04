const Utils = {
    strings: {
        /**
         * 数组去重(双重循环)
         * @param {Array} array 
         * @return {Array} 去重后的数组
         */
        unique: function (array) {
            if (!Array.isArray(array)) {
                throw TypeError('参数不是一个数组')
            }
            const newArray = []
            let isRepeat
            for (let i = 0; i < array.length; i++) {
                isRepeat = false
                for (let j = 0; j < newArray.length; j++) {
                    if (array[i] === newArray[j]) {
                        isRepeat = true
                        break
                    }
                }
                if (!isRepeat) newArray.push(array[i])
            }
            return newArray
        },
        /**
         * 数组去重(ES6语法)
         * @param {Array} array 
         * @return {Array} 去重后的数组
         */
        uniquees6: function (array) {
            if (!Array.isArray(array)) {
                throw TypeError('参数不是一个数组')
            }
            return [...new Set(array)]
        },
        /**
         * 判断一个单词是否是回文
         * @param {String} str 
         * @return {Boolean}
         */
        checkPalindrom: function (str) {
            if (!str) return
            return str == str.split('').reverse().join('')
        },
        /**
         * 统计一个字符串出现最多的字母
         * @param {String} str 
         * @return {String} 出现最多的字符
         */
        findMaxDuplicateChar: function (str) {
            if (!str) return
            if (str.length === 1) return str
            const charObj = {}
            for (let i = 0; i < str.length; i++) {
                if (!charObj[str.charAt(i)]) {
                    charObj[str.charAt(i)] = 1
                } else {
                    charObj[str.charAt(i)] += 1
                }
            }
            let maxChar = '', maxValue = 1
            for (let k in charObj) {
                if (charObj[k] > maxValue) {
                    maxChar = k
                    maxValue = charObj[k]
                }
            }
            return {
                value: maxChar,
                count: maxValue
            }
        }
    },
    arrays: {}
}