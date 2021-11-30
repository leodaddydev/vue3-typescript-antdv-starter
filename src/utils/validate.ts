export const isDefined = <T>(val: T): val is NonNullable<T> => {
  return val !== undefined && val !== null
}

export const isNumeric = (val: string | number): val is string => {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)
}

export const isObject = (val: unknown): val is Record<any, any> => {
  return typeof val === 'object' && val !== null && Array.isArray(val) === false
}

export const isArray = (val: unknown): val is any[] => {
  return Array.isArray(val)
}

export const isCrawler = (userAgent: string) => {
  return /bot|crawler|spider|crawling/i.test(userAgent)
}

/**
 * @param value
 * @return {boolean}
 * @example isEmpty(null) => true
 * @example isEmpty(undefined) => true
 * @example isEmpty(1) => false
 * @example isEmpty(0) => true
 * @example isEmpty(NaN) => true
 * @example isEmpty('') => true
 * @example isEmpty(' ') => true
 * @example isEmpty({}) => true
 * @example isEmpty([]) => true
 * @example isEmpty(false) => true
 * @example isEmpty(true) => false
 * @example isEmpty({ value: 1 }) => false
 * @example isEmpty({ value: null }) => true
 * @example isEmpty({ value: { value1: {} } }) => true
 */
export const isEmpty = <T>(val: T) => {
  if (!isDefined(val)) return true

  if (typeof val === 'string' && val.trim() === '') return true

  if (typeof val === 'number' && (val === 0 || Number.isNaN(val))) return true

  if (typeof val === 'boolean' && val === false) return true

  if (isArray(val) && val.length === 0) return true

  if (isObject(val)) {
    const values = Object.values(val)

    if (values.length === 0 || values.every(isEmpty)) {
      return true
    }
  }

  return false
}

/**
 * @param value
 * @return {boolean}
 * @example isExist(null) => false
 * @example isExist(undefined) => false
 * @example isExist(1) => true
 * @example isExist('') => false
 * @example isExist(' ') => false
 * @example isExist({}) => false
 * @example isExist([]) => false
 * @example isExist(false) => false
 * @example isExist(true) => true
 * @example isExist({ value: 1 }) => true
 * @example isExist({ value: null }) => false
 * @example isExist({ value: { value1: {} } }) => false
 */
export const isExist = <T>(val: T) => {
  return !isEmpty(val)
}

/**
 * @param (value, other)
 * @return {boolean}
 * @example isEqual([], {}) => false
 * @example isEqual([], []) => true
 * @example isEqual([1, 2], [1, 2]) => true
 * @example isEqual({ a: 1, b: 2 }, { b: 2, a: 1 }) => true
 * @example isEqual({ a: 1, b: 2 }, { a: 1, b: 3 }) => false
 */
export const isEqual = <T>(value: T, other: T) => {
  if (typeof value !== typeof other) return false

  if (isArray(value) && isArray(other)) {
    return value.sort().toString() === other.sort().toString()
  }

  if (isObject(value) && isObject(other)) {
    return (
      JSON.stringify(Object.entries(value).sort()) ===
      JSON.stringify(Object.entries(other).sort())
    )
  }

  return value === other
}

/**
 * @param phone: string
 * @return {boolean}
 * @example isVnMobilePhone('0912345678') => true
 * @example isVnMobilePhone('0123456789') => false
 * @example isVnMobilePhone('0312345678') => false
 * @example isVnMobilePhone('0322345678') => true
 */
export const isVnMobilePhone = (phone: string) => {
  const regexVnMobilePhone =
    /^(0|\+84)(\s|\.)?((3[2-9])|(5[2689])|(7[06-9])|(8[1-9])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/

  return regexVnMobilePhone.test(phone)
}

/**
 * @param email: string
 * @return {boolean}
 * @example isEmail('abc@xyz.com') => true
 * @example isEmail('abc@') => false
 * @example isEmail('abc@sx@') => false
 * @example isEmail('ab.c@xyz.com.vn') => true
 */
export const isEmail = (email: string) => {
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  return regexEmail.test(email)
}
