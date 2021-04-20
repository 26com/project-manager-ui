import { React } from 'react';
import './style.css';

export default function Header() {
  return (
    <div className="header-container">

      <div className="header-menu-left">
        <button>
          <i className="fas fa-bars" />
        </button>
        <button>
          <i className="fas fa-chalkboard-teacher" />
        </button>
        <input type="text" placeholder="Перейти к..." />
      </div>

      <div className="header-title">
        <span>
          <i className="fab fa-accusoft" />
          Регион
        </span>
      </div>

      <div className="header-menu-right">
        <button>
          <i className="fas fa-plus" />
        </button>
        <button>
          <i className="fas fa-info" />
        </button>
        <button>
          <i className="far fa-bell" />
        </button>
        <button className="header-user-menu">
          <i className="fas fa-user-cog" />
        </button>
      </div>
    </div>
  );
}
