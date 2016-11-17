import './index.html';
import './index.less';
import dva from 'dva';

// 1. Initialize
const app = dva({
	onError(error) {
		console.error(error.stack);
	},
});

// 2. Model

app.model(require('./models/Home'));
app.model(require('./models/Brand'));
app.model(require('./models/Project'));
app.model(require('./models/Special'));
app.model(require('./models/Description'));
app.model(require('./models/NewGoods'));
app.model(require('./models/Commend'));
app.model(require('./models/Search'));
app.model(require('./models/SearchGoods'));
app.model(require('./models/Member'));

// 3. Router
app.router(require('./router'));

// 4. Start
app.start('#root');