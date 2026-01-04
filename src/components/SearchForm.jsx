import { useState } from "react"

export default function SearchForm({ onSearch }) {
  const [formData, setFormData] = useState({
    username: "",
    keyword: "",
    phone: "",
    channel: "",
    entityId: "",
    messageText: "",
    domain: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    onSearch(formData)
  }

  return (
    <div className="search-form">
      <div className="search-grid">
        <input name="username" placeholder="Username / Handle" onChange={handleChange} />
        <input name="keyword" placeholder="Slang / Keywords" onChange={handleChange} />
        <input name="phone" placeholder="Phone Number / Contact" onChange={handleChange} />
        <input name="channel" placeholder="Telegram or Channel Name" onChange={handleChange} />
        <input name="entityId" placeholder="Entity ID" onChange={handleChange} />
        <input name="messageText" placeholder="Partial Message Text" onChange={handleChange} />
        <input name="domain" placeholder="Domain / Marketplace" onChange={handleChange} />
      </div>

      <button className="search-btn" onClick={handleSubmit}>
        Search
      </button>
    </div>
  )
}
