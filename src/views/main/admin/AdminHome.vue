<template>
  <div><h1>I am Admin</h1></div>
  <div>
    <div class="container">
      <div class="row clearfix">
        <div class="col-md-12 column">
          <div class="tabbable" id="tabs-924557">
            <ul class="nav nav-tabs">
              <li class="active">
                <a href="#panel-489500" data-toggle="tab">Section 1</a>
              </li>
              <li>
                <a href="#panel-382760" data-toggle="tab">Section 2</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="panel-489500">
                <p>
                  I'm in Section 1.
                </p>
              </div>
              <div class="tab-pane" id="panel-382760">
                <p>
                  Howdy, I'm in Section 2.
                </p>
              </div>
            </div>
          </div>
          <div class="panel-group" id="panel-360458">
            <div class="panel panel-default">
              <div class="panel-heading">
                <a
                  class="panel-title collapsed"
                  data-toggle="collapse"
                  data-parent="#panel-360458"
                  href="#panel-element-843394"
                  >Collapsible Group Item #1</a
                >
              </div>
              <div id="panel-element-843394" class="panel-collapse collapse">
                <div class="panel-body">
                  Anim pariatur cliche...
                </div>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <a
                  class="panel-title collapsed"
                  data-toggle="collapse"
                  data-parent="#panel-360458"
                  href="#panel-element-177363"
                  >Collapsible Group Item #2</a
                >
              </div>
              <div id="panel-element-177363" class="panel-collapse collapse">
                <div class="panel-body">
                  Anim pariatur cliche...
                </div>
              </div>
            </div>
          </div>
          <form class="form-horizontal" role="form">
            <div class="form-group">
              <label for="inputEmail3" class="col-sm-2 control-label"
                >Email</label
              >
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" />
              </div>
            </div>
            <div class="form-group">
              <label for="inputPassword3" class="col-sm-2 control-label"
                >Password</label
              >
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <div class="checkbox">
                  <label><input type="checkbox" />Remember me</label>
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default">Sign in</button>
              </div>
            </div>
          </form>
          <a
            id="modal-529403"
            href="#modal-container-529403"
            role="button"
            class="btn"
            data-toggle="modal"
            >触发遮罩窗体</a
          >

          <div
            class="modal fade"
            id="modal-container-529403"
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                  >
                    ×
                  </button>
                  <h4 class="modal-title" id="myModalLabel">
                    标题
                  </h4>
                </div>
                <div class="modal-body">
                  内容...
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                  >
                    关闭
                  </button>
                  <button type="button" class="btn btn-primary">保存</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
