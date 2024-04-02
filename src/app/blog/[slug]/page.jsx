import Image from 'next/image'
import React from 'react'
import styles from './singlePost.module.css'


function BlogDetails() {
  return (
    <div className={styles.container}>
    
      <div className={styles.imgContainer}>
        <Image src='https://images.pexels.com/photos/19294343/pexels-photo-19294343/free-photo-of-pink-car.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" fill className={styles.img} />
      </div>
 
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Title</h1>
      <div className={styles.detail}>
       
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>
           01.01.2024
          </span>
        </div>
      </div>
      <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur reprehenderit minima cumque veritatis! Aliquid veritatis recusandae, similique odio sapiente fuga quisquam quas commodi ipsum natus repellat dicta deleniti perspiciatis.</div>
    </div>
  </div>
  )
}

export default BlogDetails