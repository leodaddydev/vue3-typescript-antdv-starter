import { notification } from 'ant-design-vue'

export const useNotification = () => {
  const error = (message = 'Error') => {
    notification.open({
      message,
      type: 'error'
    });
  }

  const success = (message = 'Success') => {
    notification.open({
      message,
      type: 'success'
    });
  }
  const warning = (message = 'Warning') => {

    notification.open({
      message,
      type: 'warning',
    })
  }
  return { error, success, warning }
}
