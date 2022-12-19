import { Schema, model } from 'mongoose'
import validator from 'validator'

// 建立資料庫欄位設定
const userSchema = new Schema({
// 欄位名稱
  account: {
    // 資料型態
    type: String,
    // 必填欄位,錯誤訊息
    required: [true, '缺少帳號'],
    // 文字長度限制
    // 字數限制,錯誤訊息
    maxlength: [20, '帳號必須是4-20個字'],
    minlength: [4, '帳號必須是4-20個字'],
    // 唯一性驗證(需下載套件才能有錯誤訊息)
    unique: true,
    // 正則表達式
    // 比對條件,錯誤訊息
    match: [/^[a-zA-Z0-9]+$/, '帳號只能包含英數字'],
    // 自動去除空白
    trim: true
  },
  email: {
    type: String,
    required: [true, '缺少信箱'],
    unique: true,
    trim: true,
    // 自訂驗證
    validate: {
      // 驗證funcion
      validator (value) {
        return validator.isEmail(value)
      },
      message: '信箱格式錯誤'
    }
  }
})

// model('collection 名稱',schema)
export default model('users', userSchema)
