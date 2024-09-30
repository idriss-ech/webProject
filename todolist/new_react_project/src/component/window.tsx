import styles from '@/styles/login.module.css'
function Window({todo, onClose}:any){
    return(
        <div className={styles.modal}>
                <div>
                    <div>
                    <span>Title</span>
                    </div>
                    <div className={styles.content}>
                        <span>{todo.title}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span>Priority</span>
                    </div>
                    <div className={styles.content}>
                    <span>{todo.priority}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span>Deadline</span>
                    </div>
                    <div className={styles.content}>
                    <span>{todo.deadline}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span>Category</span>
                    </div>
                    <div className={styles.content}>
                    <span>{todo.category}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span>Description</span>
                    </div>
                    <div className={styles.content}>
                    <span>{todo.description}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <span>Status</span>
                    </div>
                    <div className={styles.content}>
                    <span>{todo.status}</span>
                    </div>
                </div>
                <button onClick={onClose} className='btn'>Close</button>
        </div>
    )
}

export default Window