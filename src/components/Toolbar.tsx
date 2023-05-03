import Button from './Button'

const Toolbar = () => {
  return (
    <div className="Toolbar" onClickCapture={() => alert('你点击了下面的按钮')}>
      <Button onclick={() => alert('正在播放！')}>播放电影</Button>
      <Button onclick={() => alert('正在上传！')}>上传图片</Button>
    </div>
  )
}

export default Toolbar
