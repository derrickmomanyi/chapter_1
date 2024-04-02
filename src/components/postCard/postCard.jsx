import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src='https://images.pexels.com/photos/19294343/pexels-photo-19294343/free-photo-of-pink-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odio optio eius atque nostrum, sed, inventore ratione labore temporibus, perferendis quidem fugiat saepe nobis non ut molestias. Dicta, molestiae tempore?</p>
        <Link className={styles.link} href='/blog/post'>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard